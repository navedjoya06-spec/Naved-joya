import logging

logging.basicConfig(filename="app.log", level=logging.WARNING)
logging.info("application started")
logging.error("database connection failed")


try:

    number =10/0
except ZeroDivisionError:
    logging.error("division by zero error occurred",)