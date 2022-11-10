function gun_update(pointer_x, pointer_y, current_time){

    //limits aim to straight up
    if (pointer_x <= 250) {
        targetX = 250;
    } else {
        targetX = pointer_x;
    }


    //limits aim to straight ahead
    if (pointer_y >= 770) {
        targetY = 770;
    } else {
        targetY = pointer_y;
    }


    //calculates the offset from aim and mouse location
    offsetx = 250 - targetX;
    offsety = 770 - targetY;


    //makes sure all inputs are positive
    if (offsetx < 0){
        offsetx *= -1;
    }
    if (offsety < 0){
        offsety *= -1;
    }


    //calculates a velocity ratio (two decimals to divide up the total speed of the projectile into x and y velocity)
    total_offset = offsetx + offsety;
    ratio_x = offsetx / total_offset;
    ratio_y = offsety / total_offset;


    //calculates a spray offset
    spray = Phaser.Math.FloatBetween(-0.04, 0.04);


    //limits the effects of spray to only effect the bullets on specific axises
    ratio_x += spray*ratio_y;
    ratio_y += spray*ratio_x;


    //controls the ammo readout text and keeps it updated
    if (reloading && clip < 100){
        ammoText.setText([
            'reloading \n/100'
        ]);
        fireInterval = current_time + 2000;
        clip = 100;
    } 
    if (current_time > fireInterval) {
        ammoText.setText([
            clip,'/100'
        ]);
        reloading = false;
    }
}


//=================================================================================================================================================


function shoot(velx,vely){
    
    //creates the bullets
    var bullet = bullets.create(250,770,'bullet');
    bullet.setCollideWorldBounds(false);


    //muzzle spray and bullet angling
    bullet.setVelocity((2000 * velx), (2000 * -vely));
    bullet.setAngle(0-(90*ratio_y))
    bullet.allowGravity = true;
    clip -= 1;
    ammoText.setText([
        clip,'/100'
    ]);
}