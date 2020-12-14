import days.Day14
import spock.lang.Specification

class Day14Spec extends Specification {

    def day14 = new Day14()

    def "should solve part one"() {
        when:
        def result = day14.partOne()

        then:
        result == "4315"

    }

    def "should solve part two"() {
        when:
        def result = day14.partTwo()

        then:
        result == "208"
    }

    def "should apply mask"(){
        given:
        def mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X"

        when:
        def solution = day14.applyMask(11, mask)

        then:
        solution == 73

    }
}
