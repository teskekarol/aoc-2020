package days

class Day15 : Day(15) {

    override fun partOne(): String {
        val input = inputAsString.split(",").filter { it != "\n" }.map { it.toInt() }

        return memoryGame(input).drop(2020-1).first().toString()
    }

    override fun partTwo(): String {
        val input = inputAsString.split(",").filter { it != "\n" }.map { it.toInt() }

        return memoryGame(input).drop(30000000-1).first().toString()
    }

    private fun memoryGame(input: List<Int>): Sequence<Int> = sequence {
        yieldAll(input)
        val memory = input.mapIndexed { index, i -> i to index }.toMap().toMutableMap()
        var turns = input.size
        var sayNext = 0
        while(true) {
            yield(sayNext)
            val lastTimeSpoken = memory[sayNext] ?: turns
            memory[sayNext] = turns
            sayNext = turns - lastTimeSpoken
            turns++
        }
    }
}
