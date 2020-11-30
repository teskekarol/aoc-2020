package days

import util.InputReader

abstract class Day(dayNumber: Int) {

    protected val inputAsListOfString: List<String> by lazy { InputReader.getInputAsList(dayNumber) }
    protected val inputAsListOfInt: List<Int> by lazy { InputReader.getInputAsListOfInt(dayNumber) }
    protected val inputAsString: String by lazy { InputReader.getInputAsString(dayNumber) }

    abstract fun partOne(): Any

    abstract fun partTwo(): Any
}
