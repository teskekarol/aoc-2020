package days

class Day2(private val sanitizer: Day2Sanitizer = Day2Sanitizer()) : Day(2) {

    override fun partOne() = inputAsListOfString.map { matchFirstPass(sanitizer.sanitize(it)) }
        .sum()
        .toString()

    override fun partTwo() = inputAsListOfString.map { matchSecondPass(sanitizer.sanitize(it)) }
        .sum()
        .toString()

    private fun matchFirstPass(input: Day2Sanitizer.SanitizedDay2Input): Int {
        val letters = input.password.toList()
            .groupingBy { it }
            .eachCount()

        val count = letters.getOrDefault(input.letter, 0)
        return if (count in input.left..input.right) {
            1
        } else {
            0
        }
    }

    private fun matchSecondPass(input: Day2Sanitizer.SanitizedDay2Input): Int {
        val letters = input.password
        val leftLetter = letters[input.left - 1]
        val rightLetter = letters[input.right - 1]

        val matchesPassword =
            leftLetter != rightLetter
                && (leftLetter == input.letter || rightLetter == input.letter)
        return if (matchesPassword) {
            1
        } else {
            0
        }
    }

}

class Day2Sanitizer {
    fun sanitize(line: String): SanitizedDay2Input {
        val lineArr = line.split(" ")
        val ranges = lineArr[0].split("-")
        val left = ranges[0].toInt()
        val right = ranges[1].toInt()
        val letter = lineArr[1].substring(0, lineArr[1].length - 1).first()
        val password = lineArr[2]

        return SanitizedDay2Input(password.toCharArray(), letter, left, right)
    }

    data class SanitizedDay2Input(
        val password: CharArray,
        val letter: Char,
        val left: Int,
        val right: Int
    )
}
