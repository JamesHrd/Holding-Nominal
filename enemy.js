function spawn_enemy_ground(speed){
    var enemy = enemies.create(2000, 750, 'ground_blob');
    enemy.setVelocity(speed, 0);
    enemy.allowGravity = false;
}

function spawn_enemy_sky(speed){
    var enemy = enemies.create(2000, 200, 'sky_blob');
    enemy.setVelocity(speed-50,0);
    enemy.allowGravity = false;
}

function spawn_enemy_small(speed){
    var enemy = enemies.create(2000, 800, 'small_blob').setScale(0.5,0.5);
    enemy.setVelocity(speed-100,0);
    enemy.allowGravity = false;
}

function damageEnemy(bullet, enemy){
    enemy.disableBody(true,true);
    bullet.disableBody(true,true);

}