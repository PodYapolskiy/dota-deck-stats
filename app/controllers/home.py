from app import app, db
from flask import render_template, url_for, redirect, request

import json
import requests
from datetime import datetime, timedelta

from app.models.hero import Hero
from app.models.match import Match
from app.models.info import Info


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "GET":
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
    elif request.method == "POST":
        data = dict(request.form)
        print(json.dumps(data, indent=2))
        
        # Collected stats
        stats = {
            'matches': 0,
            'wins': 0  # Team A wins
        }
        
        team_a = set()
        team_b = set()
        for k, v in data.items():
            #TODO: Проверка
            
            if v == '':  # Empty input
                continue
            
            if v.isdigit():  # Hero id
                hero = Hero.query.filter_by(id=int(v)).first()
            else:  # Hero name
                hero = Hero.query.filter_by(name=v).first()

            if not hero:  # Hero = None
                continue
            
            if k.count('A'):  # не равен ли hero None
                team_a.add(str(hero.id))
            else:
                team_b.add(str(hero.id))
        
        # print(team_a, team_b)
        
        month_ago_time = datetime.now() - timedelta(days=30)  # Дата месяц назад
        month_ago_time = int(month_ago_time.timestamp())
        # print(month_ago_time)
        
        for match in Match.query.filter(Match.id > month_ago_time).all():
            # print(match.id)
            radiant_team: list = match.radiant_team.split()  # ['23', '11', '8', '30', '40']
            dire_team: list = match.dire_team.split()  # ['1', '2', '4', '80', '9']
            
            #???  123 120
            if radiant_team == ['123', '23', '71', '19', '37'] and dire_team == ['120', '106', '42', '88', '121']:
                print(team_a, team_b)
                print(radiant_team, dire_team)
            
            # Checks if both teams are subsets of publicMatch teams
            if team_a.issubset(radiant_team) and team_b.issubset(dire_team):
                if match.radiant_win:
                    stats["wins"] += 1  # Increment counter when team_a is radiant_team and it's won 
                stats["matches"] += 1  # Increment counter when both subsets are correct
            # Another case
            elif team_a.issubset(dire_team) and team_b.issubset(radiant_team):
                if not match.radiant_win:
                    stats["wins"] += 1  # Increment counter when team_a is dire_team and it's won
                stats["matches"] += 1  # Increment counter when both subsets are correct
            else:
                continue
            
        print(stats)
        
        return render_template(
            "home/index.html",
            stats=stats
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
    
    month_ago_time = datetime.now() - timedelta(days=30)  # Дата месяц назад
    month_ago_time = month_ago_time.timestamp()
    for match in Match.query.filter(Match.id > month_ago_time).all():
        print(match)
    
    return redirect(url_for('index'))
