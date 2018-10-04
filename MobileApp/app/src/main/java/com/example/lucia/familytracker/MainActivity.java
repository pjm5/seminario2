package com.example.lucia.familytracker;


import android.content.Intent;
import android.net.wifi.p2p.WifiP2pManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.EventListener;
import java.util.Timer;
import java.util.TimerTask;


public class MainActivity extends AppCompatActivity   {

    private Timer timer;
    TextView txtLat;
    TextView txtAlt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtLat = (TextView)findViewById(R.id.txtLat);
        txtAlt = (TextView)findViewById(R.id.txtAlt);


         timer = new Timer();
    }

    public void startService(View view){

        Intent intentService = new Intent(this,ServiceTracker.class);
        startService(intentService);





        //disparar timer
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {


                runOnUiThread(new Runnable() {

                    @Override
                    public void run() {

                        txtLat.setText(Double.toString(LocationUser.getLat()));
                        txtAlt.setText(Double.toString(LocationUser.getAlt()));
                    }
                });




            }
        }, 10, 5000);
    }

    public void stopService(View view){
        Intent intentService = new Intent(this,ServiceTracker.class);
        stopService(intentService);
        timer.cancel();
    }
}
