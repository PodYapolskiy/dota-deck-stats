from app import db
from app.models.info import Info
from app.models.match import Match

import requests


def match_fits_conditions(match) -> bool:
    """Checks all match conditions"""
    return (match["avg_mmr"] != None) and (match["avg_mmr"] >= 4000) and (match["game_mode"] == 22) and (not Match.query.filter_by(id=match["match_id"]).first())


def loader():
    info = Info.query.first()
    min_match_id = info.min_match_id
    max_match_id = info.max_match_id
    # print(min_match_id, type(max_match_id), info.reached_2020)

    # If it`s first execution
    if not min_match_id and not max_match_id:
        min_match_id = 10e12
        max_match_id = 0

        info.min_match_id = min_match_id
        info.max_match_id = max_match_id
        info.reached_2020 = False
        db.session.flush()

        url = "https://api.opendota.com/api/publicMatches"
        matches: list = requests.get(url).json()

        max_match_id = matches[0]["match_id"]  # Set up top id
        info.max_match_id = max_match_id
        db.session.commit()
        
        # First 100 matches
        for match in matches:
            if match_fits_conditions(match):
                m = Match(
                    id=match["match_id"],
                    radiant_win=match["radiant_win"],
                    start_time=match["start_time"],
                    avg_mmr=match["avg_mmr"],
                    radiant_team=match["radiant_team"].replace(",", " "),
                    dire_team=match["dire_team"].replace(",", " ")
                )
                try:
                    db.session.add(m)
                    db.session.commit()

                except Exception as e:
                    # print(f"Exception while parse match {match['match_id']}\n\n{e}")
                    pass
        
        # Decrease min_match_id
        min_match_id = match['match_id']
        info.min_match_id = min_match_id
        db.session.commit()

        min_match_start_time = match['start_time']
        while min_match_start_time >= 1609448400:  # Iterates since date 01.01.2021
            url = f"https://api.opendota.com/api/publicMatches?less_than_match_id={min_match_id}"
            matches: list = requests.get(url).json()
            
            for match in matches:
                if match_fits_conditions(match):
                    m = Match(
                        id=match["match_id"],
                        radiant_win=match["radiant_win"],
                        start_time=match["start_time"],
                        avg_mmr=match["avg_mmr"],
                        radiant_team=match["radiant_team"].replace(",", " "),
                        dire_team=match["dire_team"].replace(",", " ")
                    )
                    try:
                        db.session.add(m)
                        db.session.commit()

                    except Exception as e:
                        # print(f"Exception while parse match {match['match_id']}\n\n{e}")
                        pass
    
            min_match_id = match["match_id"]
            info.min_match_id = min_match_id
            db.session.commit()
            
            min_match_start_time = match["start_time"]
        # Toggle variable when reaches end
        info.reached_2020 = True
        db.session.commit()
        
        # Infinite loop. 01.01.2021 has been already reached.
        while True:
            # Go up
            min_match_id = max_match_id
            max_match_id += 100
            info.min_match_id = min_match_id
            info.max_match_id = max_match_id
            db.session.commit()
            
            url = f"https://api.opendota.com/api/publicMatches?less_than_match_id={max_match_id}"
            matches: list = requests.get(url).json()
            
            for match in matches:
                if match_fits_conditions(match):
                    m = Match(
                        id=match["match_id"],
                        radiant_win=match["radiant_win"],
                        start_time=match["start_time"],
                        avg_mmr=match["avg_mmr"],
                        radiant_team=match["radiant_team"].replace(",", " "),
                        dire_team=match["dire_team"].replace(",", " ")
                    )
                    try:
                        db.session.add(m)
                        db.session.commit()

                    except Exception as e:
                        # print(f"Exception while safe match {match['match_id']}\n\n{e}")
                        pass
    # Elif script was terminated
    else:
        reached_2020 = info.reached_2020

        if not reached_2020:
            url = f"https://api.opendota.com/api/publicMatches?less_than_match_id={min_match_id}"
            matches: list = requests.get(url).json()
            
            for match in matches:
                if match_fits_conditions(match):
                    m = Match(
                        id=match["match_id"],
                        radiant_win=match["radiant_win"],
                        start_time=match["start_time"],
                        avg_mmr=match["avg_mmr"],
                        radiant_team=match["radiant_team"].replace(",", " "),
                        dire_team=match["dire_team"].replace(",", " ")
                    )
                    try:
                        db.session.add(m)
                        db.session.commit()

                    except Exception as e:
                        # print(f"Exception while parse match {match['match_id']}\n\n{e}")
                        pass
                    
            # Decrease min_match_id
            min_match_id = match['match_id']
            info.min_match_id = min_match_id
            db.session.commit()
            
            min_match_start_time = match['start_time']
            while min_match_start_time >= 1609448400:  # Iterates since date 01.01.2021
                url = f"https://api.opendota.com/api/publicMatches?less_than_match_id={min_match_id}"
                matches: list = requests.get(url).json()
                
                for match in matches:
                    if match_fits_conditions(match):
                        m = Match(
                            id=match["match_id"],
                            radiant_win=match["radiant_win"],
                            start_time=match["start_time"],
                            avg_mmr=match["avg_mmr"],
                            radiant_team=match["radiant_team"].replace(",", " "),
                            dire_team=match["dire_team"].replace(",", " ")
                        )
                        try:
                            db.session.add(m)
                            db.session.commit()

                        except Exception as e:
                            # print(f"Exception while parse match {match['match_id']}\n\n{e}")
                            pass
                        
                min_match_id = match["match_id"]
                info.min_match_id = min_match_id
                db.session.commit()
            
                min_match_start_time = match["start_time"]
           
            info.reached_2020 = True
            db.session.commit()
        
        # Infinite loop. 01.01.2021 has been already reached.
        while True:
            # Go up
            min_match_id = max_match_id
            max_match_id += 100
            info.min_match_id = min_match_id
            info.max_match_id = max_match_id
            db.session.commit()
            
            url = f"https://api.opendota.com/api/publicMatches?less_than_match_id={max_match_id}"
            matches: list = requests.get(url).json()
            
            for match in matches:
                if match_fits_conditions(match):
                    m = Match(
                        id=match["match_id"],
                        radiant_win=match["radiant_win"],
                        start_time=match["start_time"],
                        avg_mmr=match["avg_mmr"],
                        radiant_team=match["radiant_team"].replace(",", " "),
                        dire_team=match["dire_team"].replace(",", " ")
                    )
                    try:
                        db.session.add(m)
                        db.session.commit()

                    except Exception as e:
                        # print(f"Exception while safe match {match['match_id']}\n\n{e}")
                        pass
