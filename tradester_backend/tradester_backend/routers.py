class DatabaseRouter:
    heroku_db_apps = {'heroku_connection'}
    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.heroku_db_apps:
            return 'heroku'
        return 'render'

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.heroku_db_apps:
            return 'heroku'
        return 'render'

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label in self.heroku_db_apps or \
           obj2._meta.app_label in self.heroku_db_apps:
           return True
        return 'render'

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.heroku_db_apps:
            return db == 'heroku'
        return 'render'