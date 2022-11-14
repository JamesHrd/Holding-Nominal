function spawn_enemy_ground(speed){
    var enemy = enemies.create(2000, (Phaser.Math.Between(740, 770)), 'ground_blob');
    enemy.setVelocity(speed, 0);
    enemy.allowGravity = false;
}

function spawn_enemy_sky(speed){
    var enemy = enemies.create(2000, (Phaser.Math.Between(190, 310)), 'sky_blob');
    enemy.setVelocity(speed-50,0);
    enemy.allowGravity = false;
}

function spawn_enemy_small(speed){
    var enemy = enemies.create(2000, (Phaser.Math.Between(740, 780)), 'small_blob').setScale(0.5,0.5);
    enemy.setVelocity(speed-100,0);
    enemy.allowGravity = false;
}

function damageEnemy(bullet, enemy){
    if (Phaser.Math.Between(0,10) === 10){
        spawnCoin(enemy.x, enemy.y);
    }
    enemy.disableBody(true,true);
    bullet.disableBody(true,true);
}