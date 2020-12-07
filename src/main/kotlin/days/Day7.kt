package days

class Day7 : Day(7) {
    override fun partOne(): String {
        val allBags = inputAsListOfString
            .map { line -> mapColorToItsBags(line) }
            .toMap()
        return allBags.entries.filter { canContainShiny(it.key, allBags) }
            .size
            .toString()
    }

    override fun partTwo(): String =
        (findCapacityFor(SHINY_BAG, inputAsListOfString.map { line -> mapColorToBags(line) }.toMap()) - 1)
        .toString()

    private fun mapColorToBags(line: String): Pair<String, List<CountableBag>> {
        val color = line.substring(0, line.indexOf(" bag"))
        val bags = line.subSequence(line.indexOf("contain") + 8, line.length).split(", ")
            .map { it.subSequence(0, it.indexOf(" bag")) }
            .mapNotNull { toCountableBag(it) }
        return color to bags
    }

    private fun mapColorToItsBags(line: String): Pair<String, List<String>> {
        val color = line.substring(0, line.indexOf(" bag"))
        val bags = line.subSequence(line.indexOf("contain") + 8, line.length).split(", ")
            .map { it.subSequence(0, it.indexOf(" bag")) }
            .map { it.substring(it.indexOf(" ") + 1) }
        return color to bags
    }

    private fun canContainShiny(colorName: String, allBags: Map<String, List<String>>): Boolean {
        val entry = allBags.getOrDefault(colorName, emptyList())

        if (entry.isEmpty() || entry.contains("other")) {
            return false
        }

        if (entry.contains(SHINY_BAG)) {
            return true
        }
        return entry.any { canContainShiny(it, allBags) }
    }

    private fun findCapacityFor(color: String, allBags: Map<String, List<CountableBag>>): Int =
        allBags.getOrDefault(color, emptyList())
            .map { it.count * findCapacityFor(it.color, allBags) }
            .sum() + 1

    private fun toCountableBag(it: CharSequence): CountableBag? {
        val count = it.substring(0, it.indexOf(" "))
        if (count == "no") {
            return null
        }
        val color = it.substring(it.indexOf(" ") + 1)
        return CountableBag(count.toInt(), color)
    }

    data class CountableBag(val count: Int, val color: String)

    companion object {
        const val SHINY_BAG = "shiny gold"
    }
}
