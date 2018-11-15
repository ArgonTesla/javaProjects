import objectdraw.*;
import java.awt.*;

// A program that displays the words "Pressed" and "Released"
// where the mouse button is pressed and released while connecting
// each such pair of points with a line.
public class ConnectTwo extends WindowController{

    private Location firstPoint;        // The location where button was pressed
   //DrawingCanvas canvas;
    private FramedRect emptyRect;
    // Display "Pressed" when the button is pressed.
    public void onMousePress(Location pressPoint){
        firstPoint = pressPoint;
        
    }
    
    public void onMouseDrag(Location p)
    {
        canvas.clear();
        emptyRect = new FramedRect(firstPoint, p, canvas);
        
       if( firstPoint != null)
       {
          firstPoint.getX(); 
       }
    }

    // Display "Released" and draw a line from where the mouse
    // was last pressed.
    public void onMouseRelease(Location releasePoint){
        new FilledRect(firstPoint, releasePoint, canvas);
    }

}