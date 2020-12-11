package days

class Day10 : Day(10) {

    override fun partOne(): String {
        val input = inputAsListOfInt.sorted()

        val diffs = mutableMapOf<Int, Int>()

        var iterator = 0
        var latestJol = 0

        while (true) {
            val nextJol = input[iterator]

            val diff = nextJol - latestJol
            if (diff > 3) break

            diffs[diff] = diffs.getOrDefault(diff, 0) + 1

            iterator++
            latestJol = nextJol
            if (iterator >= input.size) break

        }

        return (diffs.getOrDefault(1, 0) * (diffs.getOrDefault(3, 0) + 1)).toString()
    }

    override fun partTwo(): String = getAllAdaptersVariants(inputAsListOfInt.toSet())
        .toString()

    private val paths: MutableMap<Int, Long> = mutableMapOf()
    private fun getAllAdaptersVariants(adapters: Set<Int>): Long {
        return countPathsRecursively(adapters, 0, adapters.maxOrNull()!!)
    }

    private fun countPathsRecursively(adapters: Set<Int>, currentAdapter: Int, maxAdapter: Int): Long {
        if (currentAdapter == maxAdapter) {
            return 1
        }

        paths.getOrPut(currentAdapter) {
            countPathsForAdapter(adapters, currentAdapter, maxAdapter)
        }
        return paths[currentAdapter]!!
    }

    private fun countPathsForAdapter(adapters: Set<Int>, adapter: Int, maxAdapter: Int): Long =
        listOfNotNull(
            (adapter + 1).let { if (it in adapters) countPathsRecursively(adapters, it, maxAdapter) else null },
            (adapter + 2).let { if (it in adapters) countPathsRecursively(adapters, it, maxAdapter) else null },
            (adapter + 3).let { if (it in adapters) countPathsRecursively(adapters, it, maxAdapter) else null }
        ).sum()

}
