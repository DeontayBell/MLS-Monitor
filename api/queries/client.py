from pymongo import MongoClient
import os

DATABASE_URL = os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME", "hack_reactor_hacks_db")

client = MongoClient(DATABASE_URL)
db = client[DB_NAME]


class Queries:
    @property
    def collection(self):
        db_instance = client[DB_NAME]
        return db_instance[self.COLLECTION]
