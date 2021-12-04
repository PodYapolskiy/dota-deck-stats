from app import app, db
from app.models.info import Info
from app.models.match import Match

import requests


def _save_matches(matches):
        """Save matches into the database"""
        global min_match_id
        
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
                    # Если минимален id, меняем
                    if min_match_id > match["match_id"]:
                        min_match_id = match["match_id"]
                        
                        Info.query.filter_by(name="min_match_id").update(dict(content=f"{min_match_id}"))
                        db.session.flush()
                    
                    # Добавляем матч
                    db.session.add(m)
                    db.session.commit()
                
                except Exception as e:
                    print(f"Excpection while parse match {match['match_id']}\n\n{e}")
                    #! При ошибке
                    # raise


def loader():
    """Параллельная загрузка матчей"""
    global min_match_id
    
    print("Start loading")
    matches_len = len(Match.query.all())
    print(f"Matches count = {matches_len}")
    
    info_len = len(Info.query.all())
    print(info_len)
    for info in Info.query.all():
        print(f"{info.id}: {info.content}")
    
    # Проверка на наличие минимального id занесённого в БД
    min_match_id = Info.query.filter_by(name="min_match_id").first()
    
    # Если не находим, добавляем в бд
    if not min_match_id:
        min_match_id = 10e12  #! Только при самом первом вхождении
        db.session.add(Info(id=1, name="min_match_id", content=f"{min_match_id}"))
        db.session.commit()
    else:
        min_match_id = int(min_match_id)
        
    matches: list = requests.get("https://api.opendota.com/api/publicMatches").json()

    #TODO max_match_id
    #! При повторном вхождении не должно проходить через запрос без параметра
    #! Не предусмотрено добаление свежих матчей при повторном включении
    

    # Добавление первой сотни
    _save_matches(matches)
    
    # Добавление пока не будет достигнута нужная дата `01.01.2020`
    temp = 0
    while True and temp < 50:
        matches: list = requests.get(f"https://api.opendota.com/api/publicMatches?less_than_match_id={min_match_id}").json()
        
        _save_matches(matches)
        
        temp += 1
