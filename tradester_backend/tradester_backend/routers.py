class DefaultRouter:
    route_db_table_comments = {'Render Table'}
    def db_for_read(self, model, **hints):
        if model._meta.db_table_comment in self.route_db_table_comments:
            return 'render'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.db_table_comment in self.route_db_table_comments:
            return 'render'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.db_table_comment in self.route_db_table_comments or \
           obj2._meta.db_table_comment in self.route_db_table_comments:
           return True
        return None

    def allow_migrate(self, db, db_table_comment, model_name=None, **hints):
        if db_table_comment in self.route_db_table_comments:
            return db == 'render'
        return None


class HerokuRouter:
    route_db_table_comments = {'Heroku Table'}
    def db_for_read(self, model, **hints):
        if model._meta.db_table_comment in self.route_db_table_comments:
            return 'heroku'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.db_table_comment in self.route_db_table_comments:
            return 'heroku'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.db_table_comment in self.route_db_table_comments or \
           obj2._meta.db_table_comment in self.route_db_table_comments:
           return True
        return None

    def allow_migrate(self, db, db_table_comment, model_name=None, **hints):
        if db_table_comment in self.route_db_table_comments:
            return db == 'heroku'
        return None