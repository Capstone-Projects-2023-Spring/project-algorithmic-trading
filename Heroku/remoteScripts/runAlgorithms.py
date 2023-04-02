import psycopg2
import os

# Establish a connection to the remote database
conn = psycopg2.connect(
    host=os.environ['RENDER_HOST'],
    database=os.environ['RENDER_DB_NAME'],
    user=os.environ['RENDER_DB_USER'],
    password=os.environ['RENDER_DB_PASSWORD']
)

# Create a cursor object to interact with the database
cur = conn.cursor()

# Insert data into the database
cur.execute("INSERT INTO \"GPU_Server_Logs\" (\"accessTime\", \"response\") VALUES (%s, %s)", ("FIRST_TEST", "SUCCESSFUL"))

# Commit the changes to the database
conn.commit()

# Close the cursor and connection objects
cur.close()
conn.close()
