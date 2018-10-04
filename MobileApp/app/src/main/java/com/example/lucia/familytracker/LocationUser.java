package com.example.lucia.familytracker;

public final class LocationUser {

    private static double Alt;
    private static double Lat;

    public static double getLat() {
        return Lat;
    }

    public static void setLat(double lat) {
        Lat = lat;
    }


    public static double getAlt() {
        return Alt;
    }

    public static void setAlt(double alt) {
        Alt = alt;
    }
}
