from app import app, db
from flask import render_template, url_for, redirect, request
import json
import requests
from datetime import datetime

from app.models.hero import Hero
from app.models.match import Match


@app.route('/')
def index():
    response: list = requests.get("https://api.opendota.com/api/publicMatches").json()
    # print(len(response))  # 100
    # print(json.dumps(response[0], indent=2, ensure_ascii=False))
    
    # print(response[0]["radiant_team"].replace(",", " "))
    
    # # Convert Unix-time to datetime type
    # start_time = response[0]["start_time"]
    # start_time = datetime.utcfromtimestamp(start_time)
    
    # start_point = datetime.fromtimestamp(1638299315)
    # print(start_point)
 
    return render_template(
        "home/index.html",
    )

'''
    # @app.route('/parse/<int:iters>')
    # def parse_matches(iters=3):
    #     """"""
        
    #     # start_point = datetime(2021, 1, 1, 0, 0, 0).timestamp()
    #     # print(start_point)
    #     # start_point = datetime.fromtimestamp(start_point)
    #     # print(start_point)

    #     matches: list = requests.get("https://api.opendota.com/api/publicMatches").json()
    #     min_match_id = 10e12
        
    #     def add_matches(matches, min_match_id):
    #         """Add matches into the database. Return `min_match_id`."""
    #         for match in matches:
    #             if (match["avg_mmr"] != None) and (match["avg_mmr"] >= 4000) and (match["game_mode"] == 22) and (not Match.query.filter_by(id=match["match_id"]).first()):
    #                 m = Match(
    #                     id=match["match_id"],
    #                     radiant_win=match["radiant_win"],
    #                     start_time=match["start_time"],
    #                     avg_mmr=match["avg_mmr"],
    #                     radiant_team=match["radiant_team"].replace(",", " "),
    #                     dire_team=match["dire_team"].replace(",", " ")
    #                 )
    #                 min_match_id = min(min_match_id, match["match_id"])
    #                 try:
    #                     db.session.add(m)
    #                     db.session.commit()
    #                     return min_match_id
                    
    #                 except Exception as e:
    #                     print(f"Excpection while parse match {match['match_id']}\n\n{e}")
    #                     return None  #! При ошибке
        
    #     # First 100 matches while parsing
    #     min_match_id = add_matches(matches, min_match_id)
            
    #     # Идём по более ранним матчам
    #     for _ in range(iters-1):  # Учитывая первый проход
    #         matches: list = requests.get(f"https://api.opendota.com/api/publicMatches?less_than_match_id={min_match_id}").json()
            
    #         min_match_id = add_matches(matches, min_match_id)
            
    #     print(min_match_id)

    #     return redirect(url_for('index'))
'''

@app.route('/download_heroes')
def download_heroes():
    """Download all info about heroes"""
    
    heroes: list = requests.get("https://api.opendota.com/api/heroes").json()
    
    for hero in heroes:
        if not Hero.query.filter_by(id=hero["id"]).first():
            h = Hero(
                id=hero["id"],
                name=hero["localized_name"],
                attribute=hero["primary_attr"],
                attack_type=hero["attack_type"],
                roles=' '.join(hero["roles"])
            )
            try:
                db.session.add(h)
                db.session.commit()
            except Exception as e:
                print(f"Excpection while downloading {hero['id']}")

    return redirect(url_for('index'))


# TODO:
@app.route('/', methods=["POST"])  # ('/stats', methods=["POST"])
def return_stats():
    """Возвращает статистику по матчам"""
    data = request.json
    
    
    return


@app.route('/test/<int:start_time>')
def test(start_time):
    
    date_time = datetime.fromtimestamp(start_time)
    print(date_time)
    
    return redirect(url_for('index'))


@app.route('/t')
def test_2():
    import random
    random_match = random.choice(Match.query.all())
    print(random_match)
    
    return redirect(url_for('index'))
