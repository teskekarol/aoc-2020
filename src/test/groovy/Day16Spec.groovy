import days.Day16
import spock.lang.Specification

class Day16Spec extends Specification {

    def day16 = new Day16()

    def "should solve part one"() {
        when:
        def result = day16.partOne()

        then:
        result == "4316"

    }

    def "should solve part two"() {
        when:
        def result = day16.partTwo()

        then:
        result == "208"
    }

}
