package days

class Day6 : Day(6) {
    override fun partOne(): String = inputAsString
        .split(DOUBLE_ENTER)
        .map { findResultsForGroup(it) }
        .sum()
        .toString()

    override fun partTwo(): String = inputAsString
        .split(DOUBLE_ENTER)
        .map { correctAnswersPerGroup(it) }
        .sum()
        .toString()

    private fun correctAnswersPerGroup(group: String): Int = group
        .split(SINGLE_ENTER)
        .filter { it != "" }
        .flatMap { singleAnswer -> singleAnswer.toCharArray().toSet() }
        .toSet()
        .filter { elem -> answeredByEveryone(group, elem) }
        .size

    private fun answeredByEveryone(group: String, elem: Char) = group
        .split(SINGLE_ENTER)
        .filter { it.isNotBlank() }
        .all { personsAnwer -> personsAnwer.contains(elem) }

    private fun findResultsForGroup(group: String): Int = group
        .split(SINGLE_ENTER)
        .flatMap { singleAnswer -> singleAnswer.toCharArray().toSet() }
        .toSet()
        .size

    companion object {
        const val SINGLE_ENTER = "\n"
        const val DOUBLE_ENTER = "\n\n"
    }

}
