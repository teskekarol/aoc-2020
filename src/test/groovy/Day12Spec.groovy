import days.Day12
import spock.lang.Specification

class Day12Spec extends Specification {

    def day12 = new Day12()

    def "should solve part one"() {
        when:
        def result = day12.partOne()

        then:
        result == "938"

    }

    def "should solve part two"() {
        when:
        def result = day12.partTwo()

        then:
        result == "54404"
    }
}
