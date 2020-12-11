package days

import days.Spot.FREE
import days.Spot.NO_SPOT
import days.Spot.TAKEN

typealias NeighbourCalculateFun = (List<List<Spot>>, Int, Int, Int, Int) -> Int

class Day11 : Day(11) {

    override fun partOne(): String = inputAsListOfString
        .map { it.asListOfSpot() }
        .findFinalMap(PART_ONE_MAX_NEIGHBOURS, F1Transformer())
        .flatten()
        .filter { it == TAKEN }
        .size
        .toString()

    override fun partTwo(): String = inputAsListOfString
        .map { it.asListOfSpot() }
        .findFinalMap(PART_TWO_MAX_NEIGHBOURS, F2Transformer())
        .flatten()
        .filter { it == TAKEN }
        .size
        .toString()

    private fun String.asListOfSpot() = this.split("").filter { it != "" }.map { it.toSpot() }

    private tailrec fun List<List<Spot>>.findFinalMap(maxNeighbors: Int, neighbourCounter: NeighbourCalculateFun): List<List<Spot>> {
        val mapAfterRound = mapAfterRound(maxNeighbors, neighbourCounter)

        return if (mapAfterRound == this) {
            mapAfterRound
        } else {
            mapAfterRound.findFinalMap(maxNeighbors, neighbourCounter)
        }
    }

    private fun List<List<Spot>>.mapAfterRound(maxNeighbors: Int, neighbourCounter: NeighbourCalculateFun): List<List<Spot>> =
        this.mapIndexed { i, line ->
            val mapIndexed = line.mapIndexed { j, cell ->
                val mapped = mapToValue(cell, this, i, j, maxNeighbors, neighbourCounter)
                mapped
            }
            mapIndexed
        }

    private fun mapToValue(
        cell: Spot,
        map: List<List<Spot>>,
        i: Int,
        j: Int,
        maxNeighbors: Int,
        neighbourCounter: NeighbourCalculateFun
    ): Spot = when (cell) {
        FREE -> handleEmptySpot(map, i, j, neighbourCounter)
        TAKEN -> handleTakenSpot(map, i, j, neighbourCounter, maxNeighbors)
        else -> NO_SPOT
    }

    private fun handleTakenSpot(map: List<List<Spot>>, i: Int, j: Int, neighbourCounter: NeighbourCalculateFun, maxNeighbors: Int): Spot =
        if (countNearestNeighbour(map, i, j, neighbourCounter) >= maxNeighbors) {
            FREE
        } else {
            TAKEN
        }

    private fun handleEmptySpot(map: List<List<Spot>>, i: Int, j: Int, neighbourCounter: NeighbourCalculateFun): Spot =
        if (countNearestNeighbour(map, i, j, neighbourCounter) == 0) {
            TAKEN
        } else {
            FREE
        }

    private fun countNearestNeighbour(
        map: List<List<Spot>>,
        i: Int,
        j: Int,
        neighbourCounter: NeighbourCalculateFun
    ): Int =
        (-1..1).map { directionI ->
            (-1..1).map { directionJ -> neighbourCounter(map, i, directionI, j, directionJ) }
                .sum()
        }
            .sum()

    companion object {
        const val PART_ONE_MAX_NEIGHBOURS = 4
        const val PART_TWO_MAX_NEIGHBOURS = 5
    }

}

private fun String.toSpot(): Spot = when (this) {
    "#" -> TAKEN
    "L" -> FREE
    else -> NO_SPOT
}

class F1Transformer : NeighbourCalculateFun {
    override fun invoke(map: List<List<Spot>>, i: Int, newI: Int, j: Int, newJ: Int): Int {
        val neighbour = map.getOrElse(i + newI) { emptyList() }
            .getOrElse(j + newJ) { FREE }
        return if (neighbour == TAKEN && !(newI == 0 && newJ == 0)) {
            1
        } else {
            0
        }
    }
}

class F2Transformer : NeighbourCalculateFun {
    override fun invoke(map: List<List<Spot>>, i: Int, dirI: Int, j: Int, dirJ: Int): Int {
        if (dirI == 0 && dirJ == 0) {
            return 0
        }

        return (1..Int.MAX_VALUE).asSequence()
            .mapNotNull { findFirstSpot(i, dirI, it, j, dirJ, map) }
            .filter { it != -1 }
            .first()
    }

    private fun findFirstSpot(i: Int, dirI: Int, iteration: Int, j: Int, dirJ: Int, map: List<List<Spot>>): Int? {
        val newI = i + dirI * iteration
        val newJ = j + dirJ * iteration
        return when (map.getOrElse(newI) { emptyList() }.getOrElse(newJ) { FREE }) {
            TAKEN -> 1
            FREE -> 0
            else -> null
        }
    }
}

enum class Spot(val value: String) {
    TAKEN("#"), FREE("L"), NO_SPOT(".")
}
