package days

class Day16 : Day(16) {

    override fun partOne(): String {
        val input = inputAsListOfString.map { it.toTicketValues() }

        val invalidTickets = input.filter { it.hasInvalidField() }
        println(invalidTickets)
        return sum.toString()
    }

    override fun partTwo(): String {
        val input = inputAsListOfString.map { it.toTicketValues() }

        val validTickets = input.filter { !it.hasInvalidField() }

        val posibilities = mutableMapOf<Int, MutableSet<String>>()

        val valuesByPosition = (0 until 20).map { valueAt ->
            validTickets.map { it.values[valueAt] }
        }

        valuesByPosition.forEachIndexed { index, list ->
            extendedRules.forEach { (key, value) ->
                if (list.all { position -> value.any { it.contains(position) } }) {
                    println("possible for $index is $key")
                    val orDefault = posibilities.getOrDefault(index, emptySet<String>().toMutableSet())
                    orDefault.add(key)
                    posibilities[index] = orDefault
                }
            }
        }
        val positions = mutableMapOf<String, Int>()
        while (posibilities.isNotEmpty()) {
            val toDel = posibilities.entries.first { it.value.size == 1 }
            val nameOfField = toDel.value.first()
            positions[nameOfField] = toDel.key

            posibilities.forEach { it.value.remove(nameOfField) }
            posibilities.remove(toDel.key)
        }

        val myTicket = listOf(127, 89, 149, 113, 181, 131, 53, 199, 103, 107, 97, 179, 109, 193, 151, 83, 197, 101, 211, 191)
        val interestingIndices = positions.entries.filter { it.key.startsWith("departure") }.map { it.value }

        val sum = interestingIndices.map { myTicket[it].toLong() }
            .reduce { acc, l -> acc * l }

        return sum.toString()
    }
}

private fun String.toTicketValues() = TicketValues(this.split(",").filter { !it.isBlank() }.map { it.toInt() })

var sum = 0

data class TicketValues(val values: List<Int>) {
    fun hasInvalidField(): Boolean {
        val allInRules = values.all { singleValue ->
            val isInAnyRule = rules.any { it.contains(singleValue) }
            if (!isInAnyRule) {
                sum += singleValue
            }
            isInAnyRule
        }
        return !allInRules
    }
}

val extendedRules: Map<String, List<IntRange>> = mapOf(
    "departure location" to listOf(36..626, 651..973),
    "departure station" to listOf(38..134, 142..966),
    "departure platform" to listOf(32..465, 489..972),
    "departure track" to listOf(40..420, 446..973),
    "departure date" to listOf(38..724, 738..961),
    "departure time" to listOf(30..358, 377..971),
    "arrival location" to listOf(48..154, 166..965),
    "arrival station" to listOf(48..669, 675..968),
    "arrival platform" to listOf(27..255, 276..965),
    "arrival track" to listOf(37..700, 720..955),
    "class" to listOf(50..319, 332..958),
    "duration" to listOf(35..822, 835..949),
    "price" to listOf(40..791, 802..951),
    "route" to listOf(42..56, 82..968),
    "row" to listOf(40..531, 555..968),
    "seat" to listOf(49..681, 695..962),
    "train" to listOf(31..567, 593..953),
    "type" to listOf(42..840, 855..949),
    "wagon" to listOf(31..165, 176..962),
    "zone" to listOf(48..870, 896..970),
)

val rules: List<IntRange> = listOf(
    36..626,
    651..973,
    38..134,
    142..966,
    32..465,
    489..972,
    40..420,
    446..973,
    38..724,
    738..961,
    30..358,
    377..971,
    48..154,
    166..965,
    48..669,
    675..968,
    27..255,
    276..965,
    37..700,
    720..955,
    50..319,
    332..958,
    35..822,
    835..949,
    40..791,
    802..951,
    42..56,
    82..968,
    40..531,
    555..968,
    49..681,
    695..962,
    31..567,
    593..953,
    42..840,
    855..949,
    31..165,
    176..962,
    48..870,
    896..970
)
