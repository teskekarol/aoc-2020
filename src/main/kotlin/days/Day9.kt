package days

class Day9 : Day(9) {

    override fun partOne(): String = inputAsListOfString
        .map { it.toLong() }
        .findWeakness()
        .toString()

    override fun partTwo(): String = inputAsListOfString.map { it.toLong() }
        .findMaxAndMinFromRangeSummingToWeakness(
            weakness = inputAsListOfString.map { it.toLong() }.findWeakness())
        .toString()

    private fun List<Long>.findMaxAndMinFromRangeSummingToWeakness(weakness: Long): Long {
        val listSize = this.size

        for (i in 0 until listSize - 1) {
            for (j in i + 1 until listSize) {
                val sum = this.subList(i, j).sum()
                if (sum == weakness) {
                    return (this.subList(i, j).maxOrNull()!! + this.subList(i, j).minOrNull()!!)
                }
            }
        }
        throw IllegalStateException()
    }

    private fun List<Long>.findWeakness(): Long {
        for (i in preambleSize until this.size) {
            val preamble = this.subList(i - preambleSize, i)
            val currentNumber = this[i]

            if (!canBeSumOfTwo(preamble, currentNumber)) {
                return currentNumber
            }
        }
        throw IllegalStateException()
    }

    private fun canBeSumOfTwo(numbers: List<Long>, toFind: Long): Boolean {
        val results = mutableSetOf<Long>()
        numbers.forEach {
            if (results.contains(toFind - it)) {
                return true
            }
            results.add(it)
        }
        return false
    }

    companion object {
        const val preambleSize = 25
    }
}
