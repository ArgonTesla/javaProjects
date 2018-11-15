import objectdraw.*;
import java.awt.*;

public class DrawingExample extends WindowController
{

    private Location initialPoint;
    
    public void onMousePress(Location pressPoint)
    {
        //new Text("Pressed", pressPoint, canvas);
        initialPoint = pressPoint;
    }
    
       public void onMouseDrag(Location dragPoint)
    {
        //new Text("Released", releasePoint, canvas);
        new Line(initialPoint, dragPoint, canvas);
        
        initialPoint = dragPoint;
    }
}