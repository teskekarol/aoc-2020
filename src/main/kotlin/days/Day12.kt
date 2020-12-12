package days

import kotlin.math.abs


class Day12 : Day(12) {

    override fun partOne(): String {
        val commands = inputAsListOfString.map {
            Pair(it.substring(0, 1), it.substring(1, it.length).toInt())
        }

        var currentPosition = Pair(0, 0)
        var currentDir = Direction.EAST

        commands.forEach {
            when (it.first) {
                "N" -> currentPosition = Pair(currentPosition.first, currentPosition.second + it.second)
                "S" -> currentPosition = Pair(currentPosition.first, currentPosition.second - it.second)
                "E" -> currentPosition = Pair(currentPosition.first + it.second, currentPosition.second)
                "W" -> currentPosition = Pair(currentPosition.first - it.second, currentPosition.second)
                "L" -> currentDir = handleLeft(currentDir, it.second)
                "R" -> currentDir = handleRight(currentDir, it.second)
                "F" -> currentPosition = handleForward(currentDir, currentPosition, it.second)
            }
        }

        return (abs(currentPosition.first) + abs(currentPosition.second)).toString()
    }

    private fun handleLeft(dir: Direction, deg: Int): Direction {
        return Direction.from(dir.degrees - deg)
    }


    private fun handleRight(dir: Direction, deg: Int): Direction {
        return Direction.from(dir.degrees + deg)
    }


    private fun handleForward(dir: Direction, pos: Pair<Int, Int>, value: Int): Pair<Int, Int> {
        return when (dir) {
            Direction.NORTH -> Pair(pos.first, pos.second + value)
            Direction.EAST -> Pair(pos.first + value, pos.second)
            Direction.SOUTH -> Pair(pos.first, pos.second - value)
            Direction.WEST -> Pair(pos.first - value, pos.second)
        }
    }


    override fun partTwo(): String {
        val commands = inputAsListOfString.map {
            Pair(it.substring(0, 1), it.substring(1, it.length).toInt())
        }

        var currentPosition = Pair(0, 0)
        var waypoint = Pair(10, 1)

        commands.forEach {
            when (it.first) {
                "N" -> waypoint = Pair(waypoint.first, waypoint.second + it.second)
                "S" -> waypoint = Pair(waypoint.first, waypoint.second - it.second)
                "E" -> waypoint = Pair(waypoint.first + it.second, waypoint.second)
                "W" -> waypoint = Pair(waypoint.first - it.second, waypoint.second)
                "L" -> waypoint = handleLeft2(waypoint, it.second)
                "R" -> waypoint = handleRight2(waypoint, it.second)
                "F" -> currentPosition = handleForward2(waypoint, currentPosition, it.second)
            }
        }
        return (abs(currentPosition.first) + abs(currentPosition.second)).toString()
    }

    private fun handleForward2(waypoint: Pair<Int, Int>, currentPosition: Pair<Int, Int>, value: Int): Pair<Int, Int> {
        return Pair(currentPosition.first + waypoint.first * value, currentPosition.second + waypoint.second * value)
    }

    private fun handleRight2(waypoint: Pair<Int, Int>, value: Int): Pair<Int, Int> {
        var newWayPoint = Pair(waypoint.first, waypoint.second)
        repeat(value / 90) {
            newWayPoint = Pair(newWayPoint.second, -newWayPoint.first)
        }
        return newWayPoint
    }

    private fun handleLeft2(waypoint: Pair<Int, Int>, value: Int): Pair<Int, Int> {
        var newWayPoint = Pair(waypoint.first, waypoint.second)
        repeat(value / 90) {
            newWayPoint = Pair(-newWayPoint.second, newWayPoint.first)
        }
        return newWayPoint
    }

    enum class Direction(val degrees: Int) {
        NORTH(0), EAST(90), WEST(270), SOUTH(180);

        companion object {
            fun from(deg: Int): Direction {
                val i = if (deg < 0) {
                    deg + 360
                } else {
                    deg
                } % 360
                return when (i) {
                    0 -> NORTH
                    90 -> EAST
                    180 -> SOUTH
                    270 -> WEST
                    else -> throw IllegalStateException()
                }
            }
        }

    }
}


