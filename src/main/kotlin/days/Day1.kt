package days

class Day1 : Day(1) {

    override fun partOne(): String {
        return inputAsListOfString.take(3)
            .map { it.toUpperCase() }
            .joinToString(" ")
    }

    override fun partTwo(): String {
        return inputAsString.split("\n")
            .filterNot { it.isEmpty() }
            .map { it.toUpperCase() }
            .last()
    }
}
