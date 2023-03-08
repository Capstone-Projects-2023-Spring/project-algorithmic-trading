import threading
import psycopg2
from typing import List, Tuple, Dict


class Thread(threading.Thread):
    """Base thread class that other threads inherit from."""

    def __init__(self):
        super().__init__()

    def start(self):
        """Start the thread’s activity.

It must be called at most once per thread object. It arranges for the object’s  [`run()`](
https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method to be invoked
in a separate thread of control.

This method will raise a  [`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError
"RuntimeError")  if called more than once on the same thread object.
        """
        pass

    def run(self):
        """Method representing the thread’s activity.

You may override this method in a subclass. The standard  [`run()`](
https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method invokes the
callable object passed to the object’s constructor as the  _target_  argument, if any, with positional and keyword
arguments taken from the  _args_  and  _kwargs_  arguments, respectively.

Using list or tuple as the  _args_  argument which passed to the  [`Thread`](
https://docs.python.org/3/library/threading.html#threading.Thread "threading.Thread")  could achieve the same effect.
"""
        pass

    def join(self, timeout=None):
        """Wait until the thread terminates. This blocks the calling thread until the thread whose  [`join()`](
        https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  method is
        called terminates – either normally or through an unhandled exception – or until the optional timeout occurs.

When the  _timeout_  argument is present and not  `None`, it should be a floating point number specifying a timeout
for the operation in seconds (or fractions thereof). As  [`join()`](
https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  always returns
`None`, you must call  [`is_alive()`](https://docs.python.org/3/library/threading.html#threading.Thread.is_alive
"threading.Thread.is_alive")  after  [`join()`](
https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  to decide whether a
timeout happened – if the thread is still alive, the  [`join()`](
https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  call timed out.

When the  _timeout_  argument is not present or  `None`, the operation will block until the thread terminates.

A thread can be joined many times.

[`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  raises a
[`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError "RuntimeError")  if an attempt is
made to join the current thread as that would cause a deadlock. It is also an error to  [`join()`](
https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  a thread before it
has been started and attempts to do so raise the same exception.
        """
        pass

    def is_alive(self):
        """Return whether the thread is alive.

This method returns  `True`  just before the  [`run()`](
https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method starts until
just after the  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run
"threading.Thread.run")  method terminates. The module function  [`enumerate()`](
https://docs.python.org/3/library/threading.html#threading.enumerate "threading.enumerate")  returns a list of all
alive threads.
        """
        pass


class DatabaseThread(Thread):
    """Thread that manages connecting to and querying the database."""

    def __init__(self):
        """
        Initializes the database thread.

        Variables:
            host (str): The URL of the database to connect to.
            database_password (str): The password to use for the database connection.
            username (str): The username used in the db connection
            database_name (str): Database name used in identifying proper connection port on server
        """
        super().__init__()
        self.host = "dpg-cftd6mh4reb6ks7lo5mg-a.ohio-postgres.render.com"
        self.database_password = "9jyYV1lMHCEBzDQRX66JgB0EPmepHKgv"
        self.username = "tradester_team"
        self.database_name = "tradesterdb"

        self.connection = psycopg2.connect(
            host=self.host,
            database=self.database_name,
            user=self.username,
            password=self.database_password
        )

        self.cursor = self.connection.cursor()

    def execute_query(self, query: str) -> List[Tuple]:
        """
        Executes a query on the database.

        Args:
            query (str): The SQL query to execute.

        Returns:
            A list of tuples containing the query results.
        """
        result_set = []
        try:
            self.cursor.execute(query)
            result_set = self.cursor.fetchall()
            self.notify_website()
        except Exception as e:
            print(f"Error executing query: {e}")
        return result_set

    def notify_website(self):
        """
        Thread is connected to website with websocket, after query has been run to update the database, sends
notification for page to refresh and display new data.
        """
        pass


class UserThread(Thread):
    """Thread that handles requests for users."""

    def __init__(self, username: str, password: str, quantconnect_username: str, quantconnect_password: str):
        """
        Initializes the user thread.

        Args:
            username (str): The username of the user.
            password (str): The password of the user.
            quantconnect_username (str): The QuantConnect username of the user.
            quantconnect_password (str): The QuantConnect password of the user.
        """
        super().__init__()
        self.username = username
        self.password = password
        self.quantconnect_username = quantconnect_username
        self.quantconnect_password = quantconnect_password
        self.strategy = None
        self.portfolio = {}

    def get_portfolio(self) -> Dict[str, float]:
        """
        Gets current portfolio for user from QuantConnect API, takes amount of holdings in all stocks and converts
current value to percentage of all holdings to store in portfolio dictionary.

        Returns:
            A dictionary containing the user's portfolio.
        """
        return self.portfolio

    def receive_strategy(self):
        """Based on selected strategy for user, Strategy is gathered from strategy thread.  If there are any changes
        to current strategy, trades are requested through the **requestTrade()** function.
        """
        pass

    def request_trade(self):
        """Using QuantConnection API, trades are performed until current portfolio matches portfolio received from
        strategy thread. As each API call is made, thread waits until confirmation of trade is completed before next
        trade is initiated for current user. If trade fails, a new trade will instead be requested to move money into
        a money market account until next trade request is made, at which point the stocks in portfolio will attempt
        to be purchased again """
        pass

    def update_portfolio(self):
        """Main task for thread, initially calls **getPortfolio()** to store current holdings in thread, then calls
        **receiveStrategy** to determine if updates must be made.
        """
        pass


class StrategyThread(Thread):
    """Abstract class which makes the necessary calls to get and process information to inform certain strategies"""

    def __init__(self, alpha_vantage_api_key: str):
        """
        Initializes the strategy thread.

        Args:
            alpha_vantage_api_key (str): The API key to use for Alpha Vantage.
        """
        super().__init__()
        self.parameters = {}
        self.alpha_vantage_api_key = alpha_vantage_api_key
        self.stock_data = []

    def unpack_parameters(self):
        """Parameters passed to each of the threads that implement this class will be different, but all parameters
        will be passed in by dictionary.  Takes elements of key;value pairs and update local variables.
        """
        pass

    def receive_stock_data(self):
        """Makes API call to AlphaVantage will APIKey to gather stock information on stocks relevant to Strategy,
"""


class SP500Strategy(StrategyThread):
    """This is our most basic trading strategy.  The strategy does not factor any user parameters into strategy,
    determination of how strategy is made is yet to be determined in detail.
    """

    def __init__(self, alpha_vantage_api_key: str):
        """
        Initializes the SP500Strategy thread.
        """
        super().__init__(alpha_vantage_api_key)


# noinspection PyPep8Naming
class longTermTradingStrategy(StrategyThread):
    """Takes into account different time horizons for when users are expecting to sell off stocks, and level of risk
    depending on user preference. While the code for determining the trading strategy will be complex,
    no unique functions will be created other than those defined in the strategyThread interface that this class
    implements. """

    def __init__(self, plannedYearsInvested: int, riskLevel: str, alpha_vantage_api_key: str):
        """
        Initializes the longTermTradingStrategy thread.

        Args:
            plannedYearsInvested (int): The total number of years until money is expected to be pulled out of
        investments
            riskLevel (str): The amount of risk the user is comfortable taking, altered by
        plannedYearsInvested to become less risky as date gets closer
        """
        super().__init__(alpha_vantage_api_key)
        self.plannedYearsInvested = plannedYearsInvested
        self.riskLevel = riskLevel


# noinspection PyPep8Naming
class DayTradingStrategy(StrategyThread):
    """Similarly to our other two trading strategies, no additional functions are implemented, but user's selection
    of what their largest threshold is for loss, stored as *floorPercentage*, and what percentage gain at which point
    they wish to sell, *benchmarkPercentage*, are taken into consideration in **updateStrategy()** function.
    """

    def __init__(self, alpha_vantage_api_key: str, floorPercentage: float, benchmarkPercentage: float):
        """
        Initializes the DayTradingStrategy thread.

        Args:
            floorPercentage (float): The maximum percent loss in value of a stock the user wants before selling
            benchmarkPercentage (float): The lowest percent gain in value of a stock before user wants to sell
        """
        super().__init__(alpha_vantage_api_key)
        self.floorPercentage = floorPercentage
        self.benchmarkPercentage = benchmarkPercentage




