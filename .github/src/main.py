from mainClasses import *


print("Inside main class")

databaseConnection = DatabaseThread("dpg-cftd6mh4reb6ks7lo5mg-a.ohio-postgres.render.com", "tradesterdb",
                                    "tradester_team", "9jyYV1lMHCEBzDQRX66JgB0EPmepHKgv")

query = """SELECT table_name
        FROM information_schema.tables 
        """

queryResult = databaseConnection.execute_query(query)
print(queryResult)

# Error appears when module rq tries to import, since it uses another module named resource
# That is linux specific, and doesn't exist in windows
from rq import Queue
from worker import conn
from utils import count_words_at_url
q = Queue(connection=conn)
result = q.enqueue(count_words_at_url, 'http://heroku.com')
