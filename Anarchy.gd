extends Yddrasil

class_name Anarchy
extends Reference

var _priority: int
var _agenda: void
var _goals: Array = []
var left_node: Anarchy
var right_node: Anarchy

func _init():
    _priority = 0
    _agenda = null
    _goals = []
    left_node = null
    right_node = null

func get_priority() -> int:
    return _priority

func set_priority(value: int) -> void:
    _priority = value

func get_agenda() -> void:
    return _agenda

func set_agenda(value: void) -> void:
    _agenda = value

func get_goals() -> Array:
    return _goals

func set_goals(value: Array) -> void:
    _goals = value

func get_left_node() -> Anarchy:
    return left_node

func set_left_node(value: Anarchy) -> void:
    left_node = value

func get_right_node() -> Anarchy:
    return right_node

func set_right_node(value: Anarchy) -> void:
    right_node = value

func task(item: Variant) -> void:
    assert(false, "Method not implemented.")

func do_it() -> void:
    print("I'm doing it!")