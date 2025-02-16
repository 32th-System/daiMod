{
	"options": {
		"zAnmVm.pending_switch_label": {
			"type": "i32",
			"val": "0x494"
		},
		"zAnmVm.float_script_vars.0": {
			"type": "i32",
			"val": "0x4B4"
		},
		"zAnmVm.float_script_vars.1": {
			"type": "i32",
			"val": "0x4B8"
		},
		"zBulletMgr.last_ex_d": {
			"type": "i32",
			"val": "0x438"
		},
		"zBulletMgr.last_ex_string": {
			"type": "i32",
			"val": "0x444"
		},
		"zBullet.last-ex.string": {
			"type": "i32",
			"val": "0xAB8",
		},
		"zLaserLine.last-ex.string": {
			"type": "i32",
			"val": "0xBDC",
		},
		"zLaserInfinite.last-ex.string": {
			"type": "i32",
			"val": "0xC04",
		},
		"zLaserCurve.last-ex.string": {
			"type": "i32",
			"val": "0xBD0",
		},
		"zEnemy.bullet_mgrs": {
			"type": "i32",
			"val": "0x598"
		},
		"zEnemy.full": {
			"type": "i32",
			"val": "0x5588"
		},
		"zEnemyFlag.intangible": {
			"type": "i32",
			"val": "0x20"
		},
		"zEnemyFlag.no_hit_hurt_invisible": {
			"type": "i8",
			"val": "0x13" //(1 | 2 | 16)
		},
		"zEnemyFull.enemy": {
			"type": "i32",
			"val": "0x122C"
		},
		"zEnemyFull.flags_lo": {
			"type": "i32",
			"val": "0x635C"
		},
		"zEnemyFull.enemy_id": {
			"type": "i32",
			"val": "0x6830"
		},
		"zEnemyFull.parent_id": {
			"type": "i32",
			"val": "0x6834"
		},
		"zEnemyFull.final_pos.x": {
			"type": "i32",
			"val": "0x1270"
		},
		"zEnemyFull.final_pos.y": {
			"type": "i32",
			"val": "0x1274"
		},
		"zEnemyFull.kill_count_field": { //unused field repurposed as kill count tracker
			"type": "i32",
			"val": "(<option:zEnemyFull.enemy>+<option:zEnemy.bullet_mgrs>+(0x484*0x0F)+<option:zBulletMgr.last_ex_d>)" //zEnemyFull.enemy + zEnemy.bullet_mgrs+(sizeof(zBulletMgr)*bullet_mgr_count)+zBulletMgr.last_ex_d
		},
		"zEnemyFull.last_tangible_parent_id": { //unused field repurposed as field that holds enemy ID of last parent in family tree that is not intangible
			"type": "i32",
			"val": "(<option:zEnemyFull.enemy>+<option:zEnemy.bullet_mgrs>+(0x484*0x0F)+<option:zBulletMgr.last_ex_string>)" //zEnemyFull.enemy + zEnemy.bullet_mgrs+(sizeof(zBulletMgr)*(bullet_mgr_count-1))+zBulletMgr.last_ex_string
		},
		"zEnemyManager::enemy_id_is_alive": {
			"type": "u32",
			"val": "0x409990"
		},
		"zEnemyManager::get_enemy_by_id": {
			"type": "u32",
			"val": "0x42D500"
		},
		"zSoundManager::play_sound_centered": {
			"type": "u32",
			"val": "0x476BE0"
		},
		"zSoundManager::modify_bgm": {
			"type": "u32",
			"val": "0x477A50"
		},
		"zSoundManager::update_sound_thread": {
			"type": "u32",
			"val": "0x476D20",
		},
		"zGlobals.flags.ptr": {
			"type": "u32",
			"val": "0x4CCCC8"
		},
		"bgm_pause_string_ptr": {
			"type": "u32",
			"val": "0x4B6720"
		},
		"bgm_unpause_string_ptr": {
			"type": "u32",
			"val": "0x4B6F84"
		},
		"sound_manager_ptr": {
			"type": "u32",
			"val": "0x56AD80",
		},
		"zoom_sound_index": { 
			"type": "u8",
			"val": "0x38"
		},
		"nemesis_sound_index": { 
			"type": "u8",
			"val": "0x3A"
		},
		"revenge_sound_index": { 
			"type": "u8",
			"val": "0x44"
		},
		"arcade_surface_vm_ptr": {
			"type": "u32",
			"val": "0x4CCFB8",
		},
		"hardware_input_ptr": { 
			"type": "u32",
			"val": "0x4CA210"
		},
		
		"zPlayer::on_tick": {
			"type": "u32",
			"val": "0x45CAA0"
		},
		"zEnemyManager::on_tick": {
			"type": "u32",
			"val": "0x42DF50"
		},
		"zBulletManager::on_tick": {
			"type": "u32",
			"val": "0x424E70"
		},
		"zLaserManager::on_tick": {
			"type": "u32",
			"val": "0x448870"
		},
		"zItemManager::on_tick": {
			"type": "u32",
			"val": "0x446EC0"
		},
		"zEffectManager::on_tick": {
			"type": "u32",
			"val": "0x42AF30"
		},
		"zStage::on_tick": {
			"type": "u32",
			"val": "0x41CA60"
		},
		"zReplayManager::on_tick_record": {
			"type": "u32",
			"val": "0x462940"
		},
		"zReplayManager::on_tick_playback": {
			"type": "u32",
			"val": "0x462A50"
		},
		"zAnmManager::on_tick_world": {
			"type": "u32",
			"val": "0x488220"
		},
		"zBomb::on_tick": {
			"type": "u32",
			"val": "0x420040"
		},
		"zSpellcard::on_tick": {
			"type": "u32",
			"val": "0x42A160"
		},
		"zAbilityManager::on_tick": { //th18-only
			"type": "u32",
			"val": "0x408A90"
		},
		
		"zGameThread::thread_start": {
			"type": "u32",
			"val": "0x4424E0"
		},
		"zMainMenu::thread_start": {
			"type": "u32",
			"val": "0x464B80"
		},
	},
    "binhacks": {
		"Dai.enemy.set-last-tangible-parent-id.jump-to-cave": {
			"addr": 0x42D8E7,
            "expected": "8986 <option:zEnemyFull.parent_id>",
            "code": "E9 [codecave:Dai.enemy.set-last-tangible-parent-id.call] <int3:1>"
		},
		
        "Dai.ecl.etNew.jump-to-cave": {
            "addr": 0x433E9D,
            "expected": "E9 75250000",
            "code": "E9 [codecave:Dai.ecl.etNew.set-enemy-id.call]"
        },
		
		"Dai.bullet.ex-enm.set-parent-id.jump-to-cave": {
			"addr": 0x426FBC,
			"expected": "C78424 9C000000 00000000",
			"code": "E9 [codecave:Dai.bullet.ex-enm.set-parent-id.call] <int3:6>"
		},
		
		"Dai.bullet.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x424950,
            "expected": "8BF8 83FF 01 75 0F",
            "code": "E9 [codecave:Dai.bullet.set-global-killer-enemy-id-if-hit] <int3:2>"
		},
		"Dai.laser-line.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x44AA5E,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-line.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-infinite.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x44CF18,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-infinite.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-curve.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x44F9E9,
			"expected": "83F8 01 0F85 B1000000",
			"code": "E9 [codecave:Dai.laser-curve.set-global-killer-enemy-id-if-hit] <int3:4>",
		},
		"Dai.enemy.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x42F66C,
            "expected": "F783 30510000 00020000 74 27 83F8 02 75 22",
            "code": "E9 [codecave:Dai.enemy.set-global-killer-enemy-id-if-hit] <int3:12>",
		},
		
		"Dai.player.on-tick.jump-to-cave-after-death": {
			"addr": 0x45C3AD,
			"expected": "C787 34060000 FFFFFFFF EB 18",
			"code": "E9 [codecave:Dai.player.initiate-zoom-on-death.call] <int3:7>",
		},
		
		//change the effect.anm script spawned upon death to one that's less visually cluttering for the zoom-in
		"Dai.player.change-death-effect-anm-script": {
			"addr": 0x45D10F,
			"expected": "1C",
			"code": "1D",
		},
		
		//replace several on-tick methods with codecaves that check the freeze value first, and then jump to the original on-tick method
		"Dai.player.replace-on-tick": {
			"addr": 0x45A89F,
			"expected": "<option:zPlayer::on_tick>",
			"code": "<codecave:Dai.player.on-tick-freeze>",
		},
		"Dai.enemy-manager.replace-on-tick": {
			"addr": 0x42DCC3,
			"expected": "<option:zEnemyManager::on_tick>",
			"code": "<codecave:Dai.enemy-manager.on-tick-freeze>",
		},
		"Dai.bullet-manager.replace-on-tick": {
			"addr": 0x423BC6,
			"expected": "<option:zBulletManager::on_tick>",
			"code": "<codecave:Dai.bullet-manager.on-tick-freeze>",
		},
		"Dai.laser-manager.replace-on-tick": {
			"addr": 0x442CB4,
			"expected": "<option:zLaserManager::on_tick>",
			"code": "<codecave:Dai.laser-manager.on-tick-freeze>",
		},
		"Dai.item-manager.replace-on-tick": {
			"addr": 0x4458A1,
			"expected": "<option:zItemManager::on_tick>",
			"code": "<codecave:Dai.item-manager.on-tick-freeze>",
		},
		"Dai.effect-manager.replace-on-tick": {
			"addr": 0x42AD1E,
			"expected": "<option:zEffectManager::on_tick>",
			"code": "<codecave:Dai.effect-manager.on-tick-freeze>",
		},
		"Dai.stage.replace-on-tick": {
			"addr": 0x41BA8B,
			"expected": "<option:zStage::on_tick>",
			"code": "<codecave:Dai.stage.on-tick-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-record": {
			"addr": 0x461821,
			"expected": "<option:zReplayManager::on_tick_record>",
			"code": "<codecave:Dai.replay-manager.on-tick-record-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-playback": {
			"addr": 0x461A2B,
			"expected": "<option:zReplayManager::on_tick_playback>",
			"code": "<codecave:Dai.replay-manager.on-tick-playback-freeze>",
		},
		"Dai.anm-manager.replace-on-tick-world": {
			"addr": 0x483C33,
			"expected": "<option:zAnmManager::on_tick_world>",
			"code": "<codecave:Dai.anm-manager.on-tick-world-freeze>",
		},
		"Dai.bomb.replace-on-tick": {
			"addr": 0x41FEB2,
			"expected": "<option:zBomb::on_tick>",
			"code": "<codecave:Dai.bomb.on-tick-freeze>",
		},
		"Dai.spellcard.replace-on-tick": {
			"addr": 0x443093,
			"expected": "<option:zSpellcard::on_tick>",
			"code": "<codecave:Dai.spellcard.on-tick-freeze>",
		},
		"Dai.ability-manager.replace-on-tick": {  //th18-only
			"addr": 0x40846A,
			"expected": "<option:zAbilityManager::on_tick>",
			"code": "<codecave:Dai.ability-manager.on-tick-freeze>",
		},
		
		//reset the freeze values when the game thread or the main menu thread initializes
		"Dai.gamethread-start.reset-freeze-values.jump-to-cave": {
			"addr": 0x4432B6,
			"expected": "E9 [<option:zGameThread::thread_start>]",
			"code": "E9 [codecave:Dai.gamethread-start.reset-freeze-values]",
		},
		"Dai.mainmenu.thread-start.replace": {
			"addr": [
				0x464CEC,
				0x464CF5,
			],
			"expected": "<option:zMainMenu::thread_start>",
			"code": "<codecave:Dai.mainmenu.thread-start.reset-freeze-values>",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.0": {
			"addr": 0x45871C,
			"expected": "A1 <option:zGlobals.flags.ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.0]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.1": {
			"addr": 0x458AC2,
			"expected": "A1 <option:zGlobals.flags.ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.1]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.2": {
			"addr": 0x4589AA,
			"expected": "68 <option:bgm_pause_string_ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.2]",
		},
		"Dai.unpause.prevent-bgm-unpause-if-already-zoomed.jump-to-cave": {
			"addr": 0x45A23B,
			"expected": "68 <option:bgm_unpause_string_ptr>",
			"code": "E9 [codecave:Dai.unpause.prevent-bgm-unpause-if-already-zoomed]",
		},
		
		"Dai.wrap-enemy-id-to-16-bit-limit": {
			"addr": 0x42E408,
			"expected": "83C0 01 8981 90000000 75 07 40",
			"code": "83C0 01 25 FFFF0000 75 02 40 <nop:1>"
		},
		
		//th18-only
		"Dai.th18.func-set-2.set-parent-id.jump-to-cave": {
			"addr": 0x439026,
			"expected": "81EC 8C000000",
			"code": "E9 [codecave:Dai.th18.func-set-2.save-enemy-id-in-stack] <int3:1>"
		},
		"Dai.th18.func-set-2.set-parent-id.prevent-overwrite": {
			"addr": 0x43911A,
			"expected": "3C",
			"code": "38"
		},
		
		"Dai.th18.func-set-3.set-parent-id.jump-to-cave": {
			"addr": 0x4391A6,
			"expected": "81EC 8C000000",
			"code": "E9 [codecave:Dai.th18.func-set-3.save-enemy-id-in-stack] <int3:1>"
		},
		"Dai.th18.func-set-3.set-parent-id.prevent-overwrite": {
			"addr": 0x43929A,
			"expected": "3C",
			"code": "38"
		},
    },
    "codecaves": {
		"Dai.enemy.set-last-tangible-parent-id.call": {
			"access": "re",
			"code": "8986 <option:zEnemyFull.parent_id> 56 E8 [<codecave:Dai.enemy.set-last-tangible-parent-id>] E9 [0x42D8ED]",
		},
		"Dai.ecl.etNew.set-enemy-id.call": {
			"access": "re",
			"code": "8D8431 (<option:zEnemy.bullet_mgrs>+<option:zBulletMgr.last_ex_string>) 8B95 90FAFFFF 50 FFB2 <option:zEnemy.full> E8 [<codecave:Dai.ecl.etNew.set-enemy-id>] E9 [0x436417]",
		},
		"Dai.bullet.ex-enm.set-parent-id.call": {
			"access": "re",
			"code": "53 E8 [codecave:Dai.bullet.ex-enm.set-parent-id] 898424 9C000000 E9 [0x426FC7]",
		},
		"Dai.bullet.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "8BF8 83FF 01 0F85 [0x424966] 8B96 <option:zBullet.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x424957]",
		},
		"Dai.laser-line.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x44AAAC] 8B96 <option:zLaserLine.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x44AA63]",
		},
		"Dai.laser-infinite.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x44CF66] 8B96 <option:zLaserInfinite.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x44CF1D]",
		},
		"Dai.laser-curve.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x44FAA3] 8B96 <option:zLaserCurve.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x44F9F2]",
		},
		"Dai.enemy.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 75 1F 50 8B93 <option:zEnemy.full> 8B82 <option:zEnemyFull.last_tangible_parent_id> 8B92 <option:zEnemyFull.enemy_id> C1E0 10 09C2 8915 <codecave:Dai.global.killer-enemy-id> 58 F783 30510000 00020000 0F84 [0x42F69F] 83F8 02 0F85 [0x42F69F] E9 [0x42F67D]",
		},
		
		"Dai.player.initiate-zoom-on-death.call": {
			"access": "re",
			"code": "C787 34060000 FFFFFFFF E8 [codecave:Dai.player.initiate-zoom-on-death] E9 [0x45C3D1]",
		},
		
		//on-tick replacements that first check the freeze value and proceed to the original on-tick method if it's zero
		//player's on-tick handles updating freeze timer, checking input, and resuming gameplay. 	(Side note: I don't know why I decided to use player::on_tick specifically for this, and I could probably simplify things by handling it in the first on-tick method to be affected by the freeze instead, which is ReplayManager::on_tick... I think. But well, the mod works just fine so I'm keeping it like this for now.
		"Dai.enemy-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zEnemyManager::on_tick>] B8 01000000 C3"
		},
		"Dai.bullet-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zBulletManager::on_tick>] B8 01000000 C3"
		},
		"Dai.laser-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zLaserManager::on_tick>] B8 01000000 C3"
		},
		"Dai.item-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zItemManager::on_tick>] B8 01000000 C3"
		},
		"Dai.effect-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zEffectManager::on_tick>] B8 01000000 C3"
		},
		"Dai.stage.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [<option:zStage::on_tick>] B8 01000000 C3"
		},
		"Dai.replay-manager.on-tick-record-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [<option:zReplayManager::on_tick_record>] B8 01000000 C3"
		},
		"Dai.replay-manager.on-tick-playback-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [<option:zReplayManager::on_tick_playback>] B8 01000000 C3"
		},
		"Dai.anm-manager.on-tick-world-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zAnmManager::on_tick_world>] B8 01000000 C3"
		},
		"Dai.bomb.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zBomb::on_tick>] B8 01000000 C3"
		},
		"Dai.spellcard.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zSpellcard::on_tick>] B8 01000000 C3"
		},
		"Dai.ability-manager.on-tick-freeze": {  //th18-only
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zAbilityManager::on_tick>] B8 01000000 C3"
		},
		
		//reset freeze values and jump to GameThread::thread_start
		"Dai.gamethread-start.reset-freeze-values": {
			"access": "re",
			"code": "C705 <codecave:Dai.global.freeze-pre> 00000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 00000000 E9 [<option:zGameThread::thread_start>]",
		},
		"Dai.mainmenu.thread-start.reset-freeze-values": {
			"access": "re",
			"code": "C705 <codecave:Dai.global.freeze-pre> 00000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 00000000 E9 [<option:zMainMenu::thread_start>]",
		},
		
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.0": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x458740] A1 <option:zGlobals.flags.ptr> E9 [0x458721]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.1": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x458AE0] A1 <option:zGlobals.flags.ptr> E9 [0x458AC7]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.2": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x4589BD] 68 <option:bgm_pause_string_ptr> E9 [0x4589AF]",
		},
		"Dai.unpause.prevent-bgm-unpause-if-already-zoomed": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x45A24E] 68 <option:bgm_unpause_string_ptr> E9 [0x45A240]",
		},
		
		//th18-only
		"Dai.th18.func-set-2.save-enemy-id-in-stack": {
			"access": "re",
			"code": "81EC 8C000000 8B91 (<option:zEnemyFull.enemy_id> - 0x122C) 899424 84000000 E9 [0x43902C]",
		},
		"Dai.th18.func-set-3.save-enemy-id-in-stack": {
			"access": "re",
			"code": "81EC 8C000000 8B91 (<option:zEnemyFull.enemy_id> - 0x122C) 899424 84000000 E9 [0x4391AC]",
		},
		
		//ID of the enemy that killed the player
		"Dai.global.killer-enemy-id": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
		//freeze value for update methods that occur before the player's, and for the player itself
		"Dai.global.freeze-pre": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
		//freeze value for update methods that occur after the player's
		"Dai.global.freeze": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
		//timer until the player can press a key to continue playing
		"Dai.global.freeze-timer": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
    }
}
