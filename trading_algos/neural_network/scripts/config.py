config_dict = {
    "av": {
        "a_k": "2JMCN347HZ3BU9RC", 
        "symbol": "SPY",
        "outputsize": "full",
        "fields": ["1. open", "5. adjusted close", "3. low", "2. high", "6. volume"],
        "format": "pandas"
    },
    "data": {
        "window_size": 20,
        "train_split_size": 0.80,
    }, 
    "plots": {
        "xticks_interval": 90, # show a date every 90 days
        "color_actual": "#001f3f",
        "color_train": "#3D9970",
        "color_val": "#0074D9",
        "color_pred_train": "#3D9970",
        "color_pred_val": "#0074D9",
        "color_pred_test": "#FF4136",
    },
    "model": {
        "input_size": 1, # since for now we are only using close price
        "num_lstm_layers": 2,
        "lstm_size": 32,
        "dropout": 0.2,
    },
    "training": {
        "device": "cpu",
        "train_batch_size": 64,
        "test_batch_size": 100,
        "num_epoch": 100,
        "learning_rate": 0.01,
        "scheduler_step_size": 40,
    }
}