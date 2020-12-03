package days


class Day3 : Day(3) {

    override fun partOne(): String {
        val input = inputAsListOfString
        var result = 1
        val input2 = input.map {
            it.split("").filter { it != "" }
        }

        result *= getForSteps(input2, 1, 3)

        return result.toString()
    }

    override fun partTwo(): String {
        val input = inputAsListOfString
        var result = 1
        val input2 = input.map {
            it.split("").filter { it != "" }
        }

        result *= getForSteps(input2, 1, 1)
        result *= getForSteps(input2, 1, 3)
        result *= getForSteps(input2, 1, 5)
        result *= getForSteps(input2, 1, 7)
        result *= getForSteps(input2, 2, 1)

        return result.toString()
    }

    private fun getForSteps(input2: List<List<String>>, down: Int, right: Int): Int {
        var result = 0
        var j = right
        var i = down
        val smallSize = input2[0].size
        val shift = calculateShift(smallSize, right)
        while (i < input2.size) {
            if (j >= smallSize) {
                j = Math.floorMod(j + shift, right)
            }
            val enc = input2[i][j]
            if (enc == "#") {
                result += 1
            }
            j += right
            i += down
        }

        return result
    }

    private fun calculateShift(size: Int, right: Int): Int {
        (size..size + right).forEach {
            if (it % right == 0) return it - size
        }
        throw IllegalArgumentException()
    }
}
