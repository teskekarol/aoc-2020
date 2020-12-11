import days.Day11
import spock.lang.Specification

class Day11Spec extends Specification {

    def day11 = new Day11()

    def "should solve part one"() {
        when:
        def result = day11.partOne()

        then:
        result == "2263"

    }

    def "should solve part two"() {
        when:
        def result = day11.partTwo()

        then:
        result == "2002"
    }
}
