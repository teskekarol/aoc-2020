import days.Day5
import spock.lang.Specification

class Day5Spec extends Specification {

    def day5 = new Day5()

    def "should solve part one"() {
        when:
        def result = day5.partOne()

        then:
        result == "861"

    }

    def "should solve part two"() {
        when:
        def result = day5.partTwo()

        then:
        result == "633"
    }
}
