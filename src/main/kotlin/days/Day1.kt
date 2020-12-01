package days

class Day1 : Day(1) {

    override fun partOne(): String {
        val results = hashSetOf<Int>()
        val input = inputAsListOfInt

        input.forEach {
            if (results.contains(target - it)) {
                return ((target - it) * it).toString()
            }
            results.add(it)
        }

        throw IllegalStateException()
    }

    override fun partTwo(): String {
        val input = inputAsListOfInt
        val results = mutableMapOf<Int, Pair<Int, Int>>()

        for (i in 0..input.size - 2) {
            for (j in i until input.size) {
                results[input[i] + input[j]] = Pair(input[i], input[j])
            }
        }

        for (i in 0..input.size - 3) {
            if (results.containsKey(target - input[i])) {
                val pair = results.getOrDefault(target - input[i], Pair(0, 0))
                return (pair.first * pair.second * input[i]).toString()
            }
        }
        throw IllegalStateException()
    }

    companion object {
        const val target = 2020
    }
}
