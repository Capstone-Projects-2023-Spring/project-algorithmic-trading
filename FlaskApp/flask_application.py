from flask import Flask, request
from mainClasses import *
import os
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['user_input']

        databaseConnection = DatabaseThread(os.environ['RENDER_HOST'], os.environ['RENDER_DB_NAME'],
                                            os.environ['RENDER_DB_USER'], os.environ['RENDER_DB_PASSWORD'])
        # Do something with user_input
        queryResult = databaseConnection.execute_query(user_input)
        print(queryResult)

        return f'Query Return: {queryResult}'
    else:
        return '''
        <form method="post">
            <label for="user_input">Enter some text:</label>
            <input type="text" name="user_input" id="user_input">
            <button type="submit">Submit</button>
        </form>
        '''
