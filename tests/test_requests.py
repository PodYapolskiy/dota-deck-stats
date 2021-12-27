import unittest
import requests


class TestRequests(unittest.TestCase):

    def test_first_request(self):
        url = "https://api.opendota.com/api/publicMatches"
        matches = requests.get(url).json()

        count = 0
        for match in matches:
            if (match["avg_mmr"] != None) and (match["avg_mmr"] >= 4000) and (match["game_mode"] == 22):
                count += 1
        # print(count)
        self.assertGreater(count, 0, f"Count: {count}")

    def test_rare_case(self):
        """If not found in first request"""
        min_match_id = 10e12
        url = f"https://api.opendota.com/api/publicMatches?less_than_match_id={min_match_id}"
        matches = requests.get(url).json()

        self.assertEqual(len(matches), 100)


if __name__ == "__main__":
    unittest.main()
