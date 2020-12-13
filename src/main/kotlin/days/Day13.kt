package days


class Day13 : Day(13) {

    override fun partOne(): String {
        val input = inputAsListOfString
        val startAt = input[0].toInt()
        val busses = input[1].split(",").filter { it != "x" }.map { it.toInt() }

        val closestDepartures = busses.map { calculateNextAfterStart(startAt, it) }
            .minByOrNull { it.second } ?: throw IllegalStateException()

        return (closestDepartures.first * (closestDepartures.second - startAt)).toString()
    }

    private fun calculateNextAfterStart(startAt: Int, busNumber: Int): Pair<Int, Int> {

        //delete loop
        var temp = busNumber
        while (temp < startAt) {
            temp += busNumber
        }

        return Pair(busNumber, temp)
    }

    override fun partTwo(): String {
        val input = inputAsListOfString
        val busses = input[1].split(",")
            .mapIndexed { index, s -> Pair(index.toLong(), s) }
            .filter { it.second != "x" }
            .map { Pair(it.first, it.second.toLong()) }

        return chineaseReminderTheorem(busses).toString()
    }

    private fun chineaseReminderTheorem(busses: List<Pair<Long, Long>>): Long {

        val product = busses.map { it.second }.reduce { acc, i -> acc * i }

        val sum = busses.map { it.first * product / it.second * inverseModulo(product / it.second, it.second) }
            .sum()

        return product - sum % product
    }

    private fun inverseModulo(x: Long, y: Long): Long {
        if (x != 0L) {
            val modulo = y % x
            return if (modulo == 0L) 1 else y - inverseModulo(modulo, x) * y / x
        }
        return 0
    }


}


