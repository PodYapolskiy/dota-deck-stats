import unittest
from datetime import datetime


class TestDatetimes(unittest.TestCase):

    def test_datetimes(self):
        min_datetime = datetime(2021, 1, 1, 0, 0, 0)
        unix_time = int(min_datetime.timestamp())  # 1609448400
        # print(min_datetime, unix_time)
        
        self.assertIsInstance(unix_time, int)
        self.assertEqual(unix_time, 1609448400)


if __name__ == '__main__':
    unittest.main()
