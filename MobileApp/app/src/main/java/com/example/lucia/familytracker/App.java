package com.example.lucia.familytracker;

import android.app.Application;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;
import	java.beans.PropertyChangeSupport;

public class App extends Application
{
    public static final String CHANNEL_ID = "ejemplo de servicio";

    @Override
    public void onCreate() {
        super.onCreate();

        CreateNotificationChannel();



    }




    private void CreateNotificationChannel(){

        if(Build.VERSION.SDK_INT > Build.VERSION_CODES.O ){
            NotificationChannel notificationChannel = new NotificationChannel(
                    CHANNEL_ID,
                    "ejemplo de service",
                    NotificationManager.IMPORTANCE_DEFAULT
            );

            NotificationManager manager = getSystemService(NotificationManager.class);
            manager.createNotificationChannel(notificationChannel);
        }


    }
}
