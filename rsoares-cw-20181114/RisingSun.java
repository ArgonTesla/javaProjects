import objectdraw.*;
import java.awt.*;

public class RisingSun extends WindowController
{
    private FilledOval sun;
    private Text instructions;
    private Location initialLocation = new Location(150,350);
    
    public void begin()
    {
        sun = new FilledOval(initialLocation, 100, 100, canvas );
        
        Color myColor = new Color(236,225,0);
        
        sun.setColor(myColor);
        
        instructions = new Text( " Please click the mouse repeatedly.", 20, 20, canvas );
    }
    public void onMouseClick(Location point)
    {
        sun.move( 0.0, -10);  
        instructions.hide();
    }
    public void onMouseExit(Location point)
    {
        sun.moveTo(initialLocation);
        
        instructions.show();
    }
}