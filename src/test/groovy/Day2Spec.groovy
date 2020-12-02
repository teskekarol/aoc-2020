import days.Day2
import spock.lang.Specification

class Day2Spec extends Specification {

    def day2 = new Day2()

    def "should solve part one"(){
        when:
        def result = day2.partOne()

        then:
        result == "628"

    }

    def "should solve part two"(){
        when:
        def result = day2.partTwo()

        then:
        result == "705"
    }
}
