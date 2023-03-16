import os

from mainClasses import *


print("Inside main class")

databaseConnection = DatabaseThread(os.environ['RENDER_HOST'], os.environ['RENDER_DB_NAME'],
                                    os.environ['RENDER_DB_USER'], os.environ['RENDER_DB_PASSWORD'])

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
