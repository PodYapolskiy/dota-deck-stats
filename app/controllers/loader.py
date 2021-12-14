from app import app, db
from app.models.info import Info
from app.models.match import Match

import requests


def _save_matches(matches):
        """Save matches into the database"""
        global min_match_id
        global max_match_id
        
        for match in matches:
            if (match["avg_mmr"] != None) and (match["avg_mmr"] >= 4000) and (match["game_mode"] == 22) and (not Match.query.filter_by(id=match["match_id"]).first()):
                m = Match(
                    id=match["match_id"],
                    radiant_win=match["radiant_win"],
                    start_time=match["start_time"],
                    avg_mmr=match["avg_mmr"],
                    radiant_team=match["radiant_team"].replace(",", " "),
                    dire_team=match["dire_team"].replace(",", " ")
                )    
                try:
                    # if match_id is lower, change it
                    if min_match_id > match["match_id"]:
                        min_match_id = match["match_id"]
                        
                        Info.query.filter_by(name="min_match_id").update(dict(content=f"{min_match_id}"))
                        db.session.flush()
                    
                    # if match_id is higher, change it
                    if max_match_id < match["match_id"]:
                        max_match_id = match["match_id"]
                        
                        Info.query.filter_by(name="max_match_id").update(dict(content=f"{max_match_id}"))
                        db.session.flush()
                    
                    # add match and commit all changes
                    db.session.add(m)
                    db.session.commit()
                
                except Exception as e:
                    print(f"Excpection while parse match {match['match_id']}\n\n{e}")


def loader():
    """The loader of dota public matches from `api.opendota.com` by following some conditions.
    1) avg_mmr >= 4000
    2) game_mode == 22
    """
    global min_match_id
    global max_match_id
    
    print(f"Start loading\nMatches count: {len(Match.query.all())}")
    print(len(Info.query.all()))
    for info in Info.query.all():
        print(f"{info.id}: {info.content}")
    
    # Find min_match_id or set up it
    min_match_info = Info.query.filter_by(name="min_match_id").first()
    # print(min_match_info)
    if not min_match_info:
        min_match_id = 10e12  # Only at first time executing the app
        db.session.add(Info(id=1, name="min_match_id", content=f"{min_match_id}"))
        db.session.commit()
    else:
        min_match_id = int(min_match_info.content)
    
    # Find max_match_id or set up it
    max_match_info = Info.query.filter_by(name="max_match_id").first()
    # print(max_match_info)
    if not max_match_info:
        max_match_id = 0  # Only at first time executing the app
        db.session.add(Info(id=2, name="max_match_id", content=f"{max_match_id}"))
        db.session.commit()
    else:
        max_match_id = int(max_match_info.content)
        

    #! При повторном вхождении не должно проходить через запрос без параметра
    #! Не предусмотрено добаление свежих матчей при повторном включении
    
    # Добавление первой сотни
    # matches: list = requests.get("https://api.opendota.com/api/publicMatches").json()
    # _save_matches(matches)
    
    # Добавление пока не будет достигнута нужная дата `01.01.2020`
    temp = 0
    while True and temp < 5:
        url = "https://api.opendota.com/api/publicMatches"
        if min_match_id != 10e12 or max_match_id != 0:  #! Продумать условие
            url += f"?less_than_match_id={min_match_id}"
        
        matches: list = requests.get(url).json()
        
        _save_matches(matches)
        
        temp += 1
