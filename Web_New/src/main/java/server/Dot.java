package server;

import java.time.LocalDate;

public class Dot {
    private int x;
    private double y;
    private double r;
    private LocalDate currentTime;
    private long scriptTime;
    private boolean result;

    public Dot(int x, double y, double r, LocalDate currentTime, long scriptTime, boolean result){
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = currentTime;
        this.scriptTime = scriptTime;
        this.result = result;
    }

    public int getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public LocalDate getCurrentTime() {
        return currentTime;
    }

    public long getScriptTime() {
        return scriptTime;
    }

    public boolean getResult() {
        return result;
    }

    @Override
    public String toString() {
        return "[x: " + getX() + "; y: " + getY() + "; r: " + getR() + "; currentTime: " + getCurrentTime() + "; scriptTime: " + getScriptTime() + "; result: " + getResult() + "]";
    }
}