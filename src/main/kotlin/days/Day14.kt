package days

import java.util.Stack

class Day14 : Day(14) {

    override fun partOne(): String {
        var currentMask = "X"
        val results = mutableMapOf<Int, Long>()
        val input = inputAsListOfString.forEach {
            if (it.startsWith("mask")) {
                currentMask = it.substring(7)
            } else {
                val closing = it.indexOfFirst { it == ']' }
                val memoryAddress = it.substring(4, closing).toInt()
                val firstEquals = it.indexOfFirst { it == '=' }
                val valueToMemory = it.substring(firstEquals + 2).toInt()

                results[memoryAddress] = applyMask(valueToMemory, currentMask)
            }
        }
        return results.entries.map { it.value }.sum().toString()
    }

    override fun partTwo(): String {
        var currentMask = "X"
        val results = mutableMapOf<Long, Long>()

        inputAsListOfString.forEach {
            if (it.startsWith("mask")) {
                currentMask = it.substring(7)
            } else {
                val closing = it.indexOfFirst { it == ']' }
                val memoryAddress = it.substring(4, closing).toInt()
                val firstEquals = it.indexOfFirst { it == '=' }
                val valueToMemory = it.substring(firstEquals + 2).toLong()

                val memoryAdresses = resolveAdresses(memoryAddress, currentMask)
                memoryAdresses.forEach {
                    results[it] = valueToMemory
                }
            }
        }
        return results.entries.map { it.value }.sum().toString()
    }

    private fun resolveAdresses(input: Int, mask: String): List<Long> {
        var stringedInt = Integer.toBinaryString(input).padStart(36, '0')

        for (i in 0 until 36) {
            when (mask[i]) {
                '1' -> stringedInt = stringedInt.replaceRange(i, i + 1, "1")
                'X' -> stringedInt = stringedInt.replaceRange(i, i + 1, "X")
                else -> {
                }
            }
        }
        val toDo = Stack<String>()
        val addresses = mutableListOf<Long>()

        toDo.add(stringedInt)

        while (!toDo.isEmpty()) {
            val next = toDo.pop()

            val indexOfFirst = next.indexOfFirst { it == 'X' }
            val zeroN = next.replaceRange(indexOfFirst, indexOfFirst + 1, "0")
            val oneN = next.replaceRange(indexOfFirst, indexOfFirst + 1, "1")

            if (zeroN.contains("X")) {
                toDo.add(zeroN)
            } else {
                addresses.add(zeroN.toLong(2))
            }

            if (oneN.contains("X")) {
                toDo.add(oneN)
            } else {
                addresses.add(oneN.toLong(2))
            }


        }


        return addresses.toList()
    }

    fun applyMask(input: Int, mask: String): Long {
        var stringedInt = Integer.toBinaryString(input).padStart(36, '0')

        for (i in 0 until 36) {
            when (mask[i]) {
                '1' -> stringedInt = stringedInt.replaceRange(i, i + 1, "1")
                '0' -> stringedInt = stringedInt.replaceRange(i, i + 1, "0")
                else -> {
                }
            }
        }

        return stringedInt.toLong(2)
    }

}
