import days.Day13
import spock.lang.Specification

class Day13Spec extends Specification {

    def day13 = new Day13()

    def "should solve part one"() {
        when:
        def result = day13.partOne()

        then:
        result == "4315"

    }

    def "should solve part two"() {
        when:
        def result = day13.partTwo()

        then:
        result == "556100168221141"
    }
}
