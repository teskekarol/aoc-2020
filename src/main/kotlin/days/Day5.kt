package days

import kotlin.math.ceil

class Day5 : Day(5) {
    override fun partOne(): String =
        inputAsListOfString.map { toPassId(it) }
            .maxOfOrNull { it }
            .toString()

    override fun partTwo(): String {
        val results = inputAsListOfString.map {
            toPassId(it)
        }.sorted()

        for (i in 0..results.size - 2) {
            if (results[i + 1] - results[i] == 2) {
                return (i + 101).toString()
            }
        }
        throw IllegalStateException()
    }

    private fun toPassId(line: String): Int {
        val rows = line.substring(0, 7)
        val columns = line.substring(7)

        val row = rows.calculateRow()
        val column = columns.calculateColumn()

        return column + row * 8

    }

    private fun String.calculateColumn(): Int {
        var left = 0
        var right = 7
        for (elem in this) {
            if (elem == 'L') {
                right -= ceil((right - left).toDouble() / 2).toInt()
            } else {
                left += ceil((right - left).toDouble() / 2).toInt()
            }
        }
        return left
    }

    private fun String.calculateRow(): Int {
        var bottom = 0
        var top = 127

        for (elem in this) {
            if (elem == 'F') {
                top -= ceil((top - bottom).toDouble() / 2).toInt()
            } else {
                bottom += ceil((top - bottom).toDouble() / 2).toInt()
            }
        }
        return top
    }
}
