extends Node

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

class_name Yddrasil
extends Node

var root: Anarchy
var core_tasks: Array = []
var node_count: int
var node_bank: Node

func _init():
    root = Anarchy.new()
    core_tasks = []
    node_count = 0
    node_bank = Node.new()

func get_node_bank() -> Node:
    return node_bank

func set_node_bank(value: Node) -> void:
    node_bank = value

func append_at(where: int, node_in: Node) -> void:
    var lv = node_in
    var current = Node.new()
    var d = Node.new()
    var i = 0
    while node_bank.get_next() != null:
        i += 1
        d = node_bank.get_next()
        if d != null and i < where:
            current.set("node_value", d.get("node_value"))
        elif i >= where:
            return
        else:
            current.set("node_value", lv.get("node_value"))

func append_at_end(node_in: Node) -> void:
    node_bank.add_child(node_in)

func append_beginning(node_in: Node) -> void:
    var newe = Node.new()
    newe.add_child(node_in)
    newe.add_child(node_bank)
    node_bank = newe

func preorder(node: Anarchy) -> void:
    if node == null:
        return
    process(node)
    preorder(node.get_left_node())
    preorder(node.get_right_node())

func postorder(node: Anarchy) -> void:
    if node == null:
        return
    postorder(node.get_left_node())
    postorder(node.get_right_node())
    process(node)

func in_process_traversal(node: Anarchy) -> void:
    if node == null:
        return
    in_process_traversal(node.get_left_node())
    process(node)
    in_process_traversal(node.get_right_node())

func process(node: Anarchy) -> void:
    var e = node.get_left_node()
    var r = node.get_right_node()
    e.do_it()
    r.do_it()

func count_nodes() -> void:
    node_count = 0
    var i = 0
    while node_bank.get_next() != null:
        if node_bank.get("node_value") != null:
            i += 1
        else:
            node_count = i
            return
    node_count = i

func n_b() -> Node:
    return node_bank

func node_count() -> int:
    return node_count

func set_n_b(node: Node) -> void:
    node_bank = node

func pulse() -> void:
    var nodes_to_pulse = node_bank
    var nc_new = node_count()
    var phone_book = dfs(nodes_to_pulse, nc_new)
    for node in phone_book:
        var anarchy_node = Anarchy.new()
        anarchy_node.set_priority(node.get("node_value") ? 1 : 0)
        anarchy_node.set_goals([true])
        if node.get_next():
            anarchy_node.set_right_node(Anarchy.new())
        if node.get_previous():
            anarchy_node.set_left_node(Anarchy.new())
        core_tasks.append(anarchy_node)

func init() -> void:
    pass

