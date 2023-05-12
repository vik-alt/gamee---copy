namespace SpriteKind {
    export const block = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Powerup()
})
function Background_Music () {
    music.play(music.createSong(assets.song`lvl 1`), music.PlaybackMode.LoopingInBackground)
}
function Losing_A_Life () {
    music.play(music.createSong(hex`0078000408010304001c00100500640000041e000004000000000000000000000000000a040004100000000800030d142c08001000030d142c08001c000e050046006603320000040a002d0000006400140001320002010002060010001200011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800180000000100030c000108000900030c000110001100030c0001`), music.PlaybackMode.InBackground)
}
function Start_Up () {
    music.play(music.createSong(assets.song`Starting`), music.PlaybackMode.UntilDone)
    Background_Music()
}
function Powerup () {
    music.play(music.createSong(hex`0078000408010400001c00010a006400f401640000040000000000000000000000000005000004120000000400012404000800012208000c00012001001c000f05001202c102c20100040500280000006400280003140006020004120000000400012704000800012508000c00012402001c000c960064006d019001000478002c010000640032000000000a060005120000000400012904000800012708000c00012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80015000000010002000b0400050002000b0800090002000b`), music.PlaybackMode.UntilDone)
}
Start_Up()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f d d d d d d f . . . . 
    . . . . f d f d d f d f . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . d f f f f d . . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . d d 8 8 8 8 8 8 d d . . . 
    . . . d d 4 4 4 4 4 4 d d . . . 
    . . . d d . . . . . . d d . . . 
    . . . d d . . . . . . d d . . . 
    . . f f f . . . . . . f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.block)
