package util

import java.io.File

object InputReader {

    fun getInputAsString(day: Int): String = fromResources(day).readText()

    fun getInputAsList(day: Int): List<String> = fromResources(day).readLines()

    fun getInputAsListOfInt(day: Int): List<Int> = getInputAsList(day).map { Integer.valueOf(it)}

    private fun fromResources(day: Int): File {
        return File(javaClass.classLoader.getResource("input_day_$day.txt").toURI())
    }
}
